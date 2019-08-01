var stream = require('getstream');
// Instantiate a new client (server side)
const APP_ID = '49021';
const APP_KEY = 'n6dqxby6gcfa';

const client = stream.connect(APP_KEY, null);

exports.get_token = function() {
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY2FybG9zIn0.wZ9km0IOKEcMfOAVhYs3iYmmJEmeRUKH-VO1QJ1';
};