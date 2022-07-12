import http from "k6/http";
import { check, sleep } from "k6";

export default function () {
  const res = http.get("http://localhost:8080/greeting");
  check(res, {
    "is status code 200": (r) => r.status === 200,
  });
  sleep(1);
}
