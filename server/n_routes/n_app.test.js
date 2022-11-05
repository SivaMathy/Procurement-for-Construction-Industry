import { request } from "express";
import supertest from "supertest";
import app from "./n_users";

describe("POST /user/save", () => {
  describe("given all details", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/user/save").send({
        userName: "nishanthan",
        email: "nishakanaga0708@gmail.com",
        phone: "07",
        password: "Nhgjfyt%6",
        dob: "10/04/1987",
      });
      expect(response.statusCode).toBe(200);
    });
    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/user/save").send({
        userName: "nishanthan",
        email: "nishakanaga0708@gmail.com",
        phone: "0774565221",
        password: "Nhgjfyt%6",
        dob: "10/04/1987",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("when all details are missing", () => {});
});
