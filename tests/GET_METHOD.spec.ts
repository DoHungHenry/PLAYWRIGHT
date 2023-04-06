import { test, expect } from '@playwright/test';

test('', async ({request}) => {
    let res  = await request.fetch(`${process.env.BASE_URL}/posts/`, {
        method: "get"
    });

    const resStatus = res.status();    
    const jsonRes = await res.json();

    expect(resStatus).toBe(200);
    expect(jsonRes.length).toBeGreaterThan(0);

    const firstUser = jsonRes[0];
    const {userId, id, title, body} = firstUser;
    expect(userId).toBe(1);
    expect(id).toBe(1);
    expect(title).toBeTruthy();
    expect(body).toBeTruthy();
});


