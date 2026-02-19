import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    
  stages: [
    { duration: '30s', target: 20 },  
    { duration: '1m', target: 100 },  
    { duration: '30s', target: 0 },   
  ],
};

export default function () {
  const url = 'https://quiddityai.com/de';
  
  const params = {
    headers: {
      'User-Agent': 'k6-load-test',
    },
  };

  const res = http.get(url, params);

  check(res, {
    'статус 200': (r) => r.status === 200,
    'не забанили (не 429)': (r) => r.status !== 429,
  });

  sleep(1);
}