import { expect, test } from "@playwright/test";

test('test delete method', async ({ request }) => {
    // Construct data
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    // Send delete request
    const res = await request.delete(url);
    const resJSON = await res.json();
    
    // Verify responded data
    expect(res.status()).toBe(200);
})
