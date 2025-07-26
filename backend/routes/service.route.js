import express from 'express';
import serviceController from '../controllers/service.controller.js';
import asyncHandler from '../helper/asyncHandler.js';
import validate from '../middlewares/validate.js';
import authMiddleware from '../middlewares/auth.js';
import createServiceSchema from '../validations/service.validation.js'

const router = express.Router();
router.post(
  "/",
  validate(createServiceSchema),
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.createService)
);

router.put(
  "/:serviceId",
  validate(createServiceSchema),
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.updateService)
);

router.get(
  "/service",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.getServiceByMentor)
);

router.get(
  "/:serviceId",
  authMiddleware.protect,
  authMiddleware.restrictTo("mentor"),
  asyncHandler(serviceController.getServiceById)
);

export default router;