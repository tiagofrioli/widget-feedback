import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { PrismaFeedbacksRespository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackService } from "./services/submit-feedback-service";
import { NodemailerRepository } from "./repositories/nodemailer/nodemailer-repository";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRespository();
  const nodemailerRepository = new NodemailerRepository();

  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbacksRepository,
    nodemailerRepository
  );

  const feedback = await submitFeedbackService.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).json({ data: feedback });
});
