import express from "express";
import slides from "../data/slides.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => res.json(slides))
);

router.get(
  "/firstSet",
  asyncHandler(async (req, res) => {
    const firstSet = [...slides.slice(-2), ...slides.slice(0, 3)];
    const resObj = {
      firstSet,
      allSlidesLength: slides.length,
    };
    res.json(resObj);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const slideId = parseInt(req.params.id);
    const slide = await slides.find((s) => s.id === slideId);

    if (slide) {
      return res.json(slide);
    }
    res.status(404);
    throw new Error("Slide not found");
  })
);

export default router;
