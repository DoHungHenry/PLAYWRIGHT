import { test, expect } from "@playwright/test";
import postContentArr from "../test-data/postContent.arr.json";

test("Post method", async ({ request }) => {
  const url = `${process.env.BASE_URL}/posts/`;

  for (let post of postContentArr) {
    const options = {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      data: post
    };
    
    // Send a POST request
    const res = await request.post(url, options);
    const resBody = await res.json();

    // Assertion
    expect(res.status()).toBe(201);
    expect(resBody.title).toBe(post.title);
    expect(resBody.body).toBe(post.body);
    expect(resBody.userId).toBe(post.userId);
    expect(resBody.id).toBeTruthy;
  }
});