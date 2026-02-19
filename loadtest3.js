mport http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 25,          
  duration: '3m',   
};

export default function () {
  const url = 'https://quiddityai.com/de';
  
  const params = {
    headers: {
      'User-Agent': 'k6-soak-test',
    },
  };

  const res = http.get(url, params);

  check(res, {
    'статус 200 (успех)': (r) => r.status === 200,
    'без ошибок 429': (r) => r.status !== 429,
  });

  sleep(2);
}