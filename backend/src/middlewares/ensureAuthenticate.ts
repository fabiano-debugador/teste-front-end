import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  const tokenKey =
    process.env.TOKEN_KEY || "13f3b6cb-3f98-4258-93c7-82878099f1d9";

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }
  const [, token] = authToken.split(" ");

  try {
    verify(token, tokenKey);
    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Token invalid",
    });
  }
}
