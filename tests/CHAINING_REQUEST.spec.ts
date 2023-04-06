// Flow: Get authentication token > Create order > Read order details > Update order > Delete Order || CRUD

import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('post, get, put, delete request successfully', async ({ request }) => {

    const baseUrl = process.env.BASE_URL;
    const headers = {'Content-type': 'application/json; charset=UTF-8',};

    const postContent = {
        title: "post title",
        body: "post body",
        userId: 1,
    };
    const postOptions  = {
        headers: headers,
        data: postContent
    };

    const putContent = {
        title: "put title",
        body: "put body",
        userId: 1,
    };
    const putOptions  = {
        headers: headers,
        data: putContent
    };

    // post
    const postRes = await request.post(baseUrl + "/posts", postOptions)
    const postResJsonBody = await postRes.json();
    const postResJsonBodyId = postResJsonBody.id;
    let postId = postResJsonBodyId - 1;
    
    // get
    const getRes = await request.get(`${baseUrl}/posts/${postId}`);
    const getResJsonBody = await getRes.json();
    expect(getRes.status()).toBe(200);
    expect(getResJsonBody.userId).toBe(10);
    expect(getResJsonBody.id).toBe(100);
    expect(getResJsonBody.title).toBeTruthy();
    expect(getResJsonBody.body).toBeTruthy();

    // put
    const putRes = await request.put(`${baseUrl}/posts/${postId}`, putOptions);
    const putResJsonBody = await putRes.json();
    expect(putRes.status()).toBe(200);
    expect(putResJsonBody.title).toBe(putContent.title);
    expect(putResJsonBody.body).toBe(putContent.body);
    expect(putResJsonBody.userId).toBe(putContent.userId);
    expect(putResJsonBody.id).toBeTruthy();

    // delete
    const deleteRes = await request.delete(`${baseUrl}/posts/${postId}`);
    expect(deleteRes.status()).toBe(200);
})
