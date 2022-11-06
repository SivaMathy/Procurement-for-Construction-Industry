import { request } from "express";
import supertest from "supertest";
import app from "./router";

describe("POST form", () => {
  describe("given all details", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/user/save").send({
        name: "rajamanoharan",
        mname: "priyanthy",
        address: "colombo",
        num: "0775663258",
        sdate: "10/04/2022",
        edate: "14/11/2022",
      });
      expect(response.statusCode).toBe(200);
    });
    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/user/save").send({
        name: "rajamanoharan",
        mname: "priyanthy",
        address: "colombo",
        num: "",
        sdate: "10/04/2022",
        edate: "14/11/2022",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("when all details are missing", () => {});
});
