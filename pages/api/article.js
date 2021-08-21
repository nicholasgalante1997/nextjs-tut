// /api/article
import axios from 'axios';

const handler = async (req, res) => {
    // attributes on req
    const { body, method, params } = req;

    const url = `https://611edb8e9771bf001785c642.mockapi.io/api/v1/articles`;

    if ( method === 'POST') {
        try {
            const article = await axios.post(url, body.article, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
            res.status(201).json({ pkg: article.data });
        } catch (e) {
            res.status(500).json({
                msg: 'failed to insert record',
                err: e
            })
        }
    }

};
export default handler;