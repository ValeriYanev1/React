import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '25%',
        backgroundBlendMode: 'darken',
    },
    atr: {
        background: '#8E7C68',
        color: 'black',
        '&:hover': {
            background: "#DDC9BC",
        },
    },
    dots: {
        '&:hover': {
            background: "#DDC9BC",
        },
    },
    p: {
        color: 'black',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        background: '#8E7C68  '
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'black',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'black',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});