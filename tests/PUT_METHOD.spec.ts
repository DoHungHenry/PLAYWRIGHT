import { expect, test } from "@playwright/test";

test('test put method', async ({ request }) => {
    // Construct data
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const postContent = {
        id: 1,
        title: "this is title",
        body: "this is body",
        userId: 1,
    };
    const options = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        data: postContent
    };

    // Send put request
    const res = await request.put(url, options);
    const resJSON = await res.json();
    
    // Verify responded data
    expect(res.status()).toBe(200);
    expect(resJSON.id).toBe(postContent.id);
    expect(resJSON.title).toBe(postContent.title);
    expect(resJSON.body).toBe(postContent.body);
    expect(resJSON.userId).toBe(postContent.userId);
})
