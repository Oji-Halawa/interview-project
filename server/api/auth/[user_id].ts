import { defineEventHandler, H3Event, sendError } from "h3";
import axios from "axios";

export default defineEventHandler(async (event: H3Event) => {
  const { user_id } = event.context.params || {};

  if (!user_id) {
    return sendError(event, new Error("User ID is required"));
  }

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${user_id}`,
    );
    return { success: true, user: response.data, code: 200 };
  } catch (error) {
    const err = error as {
      response?: { status: number; statusText: string };
      message: string;
    };

    return sendError(
      event,
      new Error(
        `Error fetching user data: ${
          err.response?.statusText || err.message || "Unknown error"
        }`,
      ),
    );
  }
});
