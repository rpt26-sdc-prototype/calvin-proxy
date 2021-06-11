import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 1 }, // Get up to 1 rps
    { duration: '2m', target: 1 }, // stay there for 2 minutes
    { duration: '2m', target: 10 }, // get up to 10rps
    { duration: '2m', target: 10 }, // stay
    { duration: '2m', target: 100 }, // get up to 100 rps
    { duration: '2m', target: 100 }, // stay
    { duration: '2m', target: 1000 }, // get up to 1000 rps
    { duration: '2m', target: 1000 }, // stay
    { duration: '5m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {
  const BASE_URL = 'http://localhost:3000';
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/1/`,
    ],
    [
      'GET',
      `${BASE_URL}/100/`,
    ],
    [
      'GET',
      `${BASE_URL}/1000/`,
    ],
    [
      'GET',
      `${BASE_URL}/10000/`,
    ],
    [
      'GET',
      `${BASE_URL}/100000/`,
    ],
    [
      'GET',
      `${BASE_URL}/1000000/`,
    ],
    [
      'GET',
      `${BASE_URL}/10000000/`,
    ],
  ]);
  sleep(1);
}
