"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const InMemoryIssueRepository_1 = require("./repositories/InMemoryIssueRepository");
const IssueService_1 = require("./services/IssueService");
const IssueController_1 = require("./controllers/IssueController");
const issueRoutes_1 = require("./routes/issueRoutes");
const errorHandler_1 = require("./middleware/errorHandler");
const createApp = () => {
    const app = (0, express_1.default)();
    // Middleware
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    // Dependencies
    const issueRepository = new InMemoryIssueRepository_1.InMemoryIssueRepository();
    const issueService = new IssueService_1.IssueService(issueRepository);
    const issueController = new IssueController_1.IssueController(issueService);
    // Routes
    app.use('/issues', (0, issueRoutes_1.createIssueRoutes)(issueController));
    // Error handling
    app.use(errorHandler_1.errorHandler);
    return app;
};
exports.createApp = createApp;
