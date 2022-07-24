import { ClientRouter } from "./Client";
import { Router } from "express";

const IndexRouter = Router();

IndexRouter.use('/conta', ClientRouter);

export default IndexRouter;