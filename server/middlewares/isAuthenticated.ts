import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      id: String;
    }
  }
}

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.cookies.token;

    if (!token) {
      res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
      return;
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET!) as jwt.jwtPayload;

    if (!decode) {
      res.status(401).json({
        success: false,
        message: "user not authenticated",
      });
      return;
    }

    req.id = decode.userId;

    next();
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
