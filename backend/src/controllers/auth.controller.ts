import express, { Request, Response } from "express";

export const loginUser = async (req: Request, res: Response) => {
    res.status(200).json({
        message: "Logging in user",
    });
} 