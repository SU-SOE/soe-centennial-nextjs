/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";

type JsonObject = { [key: string]: any };

export function addIdsToValidObjects<T extends JsonObject | JsonObject[]>(
  data: T,
): T {
  if (Array.isArray(data)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data.map((item) => addIdsToValidObjects(item)) as T;
  } else if (typeof data === "object" && data !== null) {
    if ("type" in data && !("id" in data)) {
      data.id = uuidv4();
    }

    if ("id" in data && "props" in data && typeof data.props === "object") {
      data.props = { ...data.props, id: data.id };
    }

    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (typeof value === "object" && value !== null) {
        data[key] = addIdsToValidObjects(value);
      }
    });
  }
  return data;
}
