import axios from "axios";
import type { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  if (!event.path.startsWith("/dashboard")) return;

  const userId = getCookie(event, "user_id");
  console.log(userId);

  if (!userId) {
    deleteCookie(event, "user_id");
    deleteCookie(event, "user_data");
    return await sendRedirect(event, "/");
  }

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
  } catch (error) {
    deleteCookie(event, "user_id");
    deleteCookie(event, "user_data");
    return await sendRedirect(event, "/");
  }
});
