import { ModalProps } from '../../../ui/elements';

const simpleArgs: ModalProps = {
    modalSteps: [
        {
            banner: {hasBanner: true, image: 'https://media.istockphoto.com/id/1449205699/photo/planet-earth-and-sun.jpg?s=612x612&w=0&k=20&c=q1h5wu4omdwwyrjDJl4lzUjep2CBDFM42FfcMUvQPxY='},
            title: { text: 'Title of step 1' },
            description: 'Description of step 1',
            body: 'Body',
            nextButtonText: 'Go to Step 2',
            showBackButton: false,
        },
        {
            banner: 'https://via.placeholder.com/150',
            title: { text: 'Title of step 2' },
            description: 'Description of step 2',
            body: 'Body',
            nextButtonText: 'Got it!',
            showBackButton: true,
        },
    ],
    shouldHideOnClickAway: false,
    onHide: () => console.log('onHide'),
    onFinalStep: () => console.log('onFinalStep'),
    mobileBottomFullWidth: false,
    onStepChange: () => console.log('onStepChange'),
    showModalButtons: true,
    showHeader: true,
    modalPadding: '20px',
    modalBodyMargin: '20px',
    width: '500px',
    height: 'auto',
    minHeight: '600px',
    showCloseButton: true,
};

export default simpleArgs;