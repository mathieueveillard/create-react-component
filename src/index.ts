import { Command } from "commander";
import * as chalk from "chalk";
import handler from "./handler";

const program = new Command();

program
  .name("create-react-component")
  .description("CLI for creating a React component in its own folder")
  .version("1.0.0");

program
  .command("generate")
  .description("generate a React component in its own folder")
  .option("-p, --path <string>", "path where the component will be created", process.cwd())
  .option("-n, --name <string>", 'name of the component (defaults to "Component")', "Component")
  .action(async ({ name, path }) => {
    try {
      await handler({ name, path });
      console.log(chalk.greenBright(`${name} has been generated successfully!`));
    } catch (error) {
      console.log(chalk.redBright(error));
    }
  });

program.parse();
