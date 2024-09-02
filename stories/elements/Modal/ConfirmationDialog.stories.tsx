import { BUTTON_VARIANTS_ENUM } from 'ui/elements/Button';
import NSConfirmationDialog, {
    ConfirmationDialogProps,
} from 'ui/elements/Modal/ConfirmationDialog';

// eslint-disable-next-line import/no-duplicates
import { Template } from './ConfirmationDialog.source';
// eslint-disable-next-line import/no-duplicates
import templateRawSourceCode from './ConfirmationDialog.source?raw';

export default {
    title: 'Elements/NSModal',
    component: NSConfirmationDialog,
    parameters: {
        docs: {
            source: {
                code: templateRawSourceCode,
            },
        },
    },
};

const defaultArgs: ConfirmationDialogProps = {
    banner: null,
    title: 'Are you sure?',
    description: 'You will need to sign in again to use the platform.',
    body: null,
    onConfirm: () => {},
    onCancel: () => {},
    confirmText: 'Sign out',
    cancelText: 'Stay Signed in',
    confirmButtonVariant: BUTTON_VARIANTS_ENUM.SUCCESS,
    cancelButtonVariant: BUTTON_VARIANTS_ENUM.DANGER,
    showCloseButton: false,
    hideOnClickAway: false,
    blurBackground: false,
};

export const ConfirmationDialog = Template.bind({});

ConfirmationDialog.args = {
    ...defaultArgs,
};
