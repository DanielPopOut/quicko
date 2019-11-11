import run from './runner';
import { askPlaybookConfiguration } from './dialog';

const context = {};

const main = async () => {
  while (true) {
    const playbookConfiguration = await askPlaybookConfiguration();
    const { playbook, playbookParameters } = playbookConfiguration;

    if (playbook) {
      await run(playbook, playbookParameters, context);
    }
  }
};

main();
