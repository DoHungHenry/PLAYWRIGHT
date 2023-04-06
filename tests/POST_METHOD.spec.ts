import { test, expect } from '@playwright/test';
// import * as fs from "fs"; // 1st way of read json file
// import * as path from "path"; // 1st way of read json file
import postContent from "../test-data/postContent.json";

test('Post method', async ({ request }) => {
    const url = `${process.env.BASE_URL}/posts/`;
    
    // const dataFileLocation = path.resolve(__dirname, "../test-data/postContent.json") // 1st way of read json file
    // const postContent = fs.readFileSync(dataFileLocation); // 1st way of read json file
    // console.log(postContent); // 1st way of read json file

    const options  = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        data: postContent
    }

    // Send a POST request
    const res = await request.post(url, options);
    const resBody = await res.json();

    // Print body json & res status
    console.log(resBody);
    console.log(res.status());

    // Assertion
    expect(res.status()).toBe(201);
    expect(resBody.title).toBe(postContent.title);
    expect(resBody.body).toBe(postContent.body);
    expect(resBody.userId).toBe(postContent.userId);
    expect(resBody.id).toBeTruthy;
})
