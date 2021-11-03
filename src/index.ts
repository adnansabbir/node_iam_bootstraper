import {connectToDb} from "./utilities/helpers/database.utility";
import {app} from "./app";
import {checkEnvData} from "./utilities/helpers/check-env-data.utility";
import {EmailSenderService} from "./services/EmailSender.service";

const port = process.env.PORT || 5000;

const start = async () => {
    await connectToDb();
    console.log(`Connected to db`);

    EmailSenderService.ConfigureEmailService();

    app.listen(port);
}

checkEnvData();

start().then(() => {
    console.log(`Server running on port ${port}`);
}).catch(e => {
    console.log(`Error starting server`, e);
})

