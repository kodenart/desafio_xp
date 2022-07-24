import { ClientRouter } from "./Client";
import { Router } from "express";
import { AssetRouter } from "./Asset";
import { OperationRouter } from "./Operation";

const IndexRouter = Router();

IndexRouter.use('/conta', ClientRouter);
IndexRouter.use('/ativos', AssetRouter);
IndexRouter.use('/investimentos', OperationRouter);

export default IndexRouter;