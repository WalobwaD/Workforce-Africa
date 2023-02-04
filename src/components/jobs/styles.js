const paperStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: {
        mobile: '100%',
        tablet: 300,
        laptop: '100%'
    },
    width: {
        mobile : '80%',
        tablet: '70%',
        laptop: 400
    }

}


const buttonBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingX: 3,
    marginBottom: 3

}

const applyButton = {
    borderColor: '#FD510C',
    color: '#636365',
    fontFamily: 'JoseFin Sans, sans-serif',

    '&:hover' : {
        backgroundColor: '#FD510C',
        opacity: 0.75,
        borderColor: 'white',
        color: 'white',
        boxShadow: '0 0 15px #FD510C'
    }
}

const backDrop = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center', 
    color: 'white',
    backgroundColor: 'rgba(251, 182, 1, 0.9)',
    zIndex: 1
}

const flexBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

const jobTitle = {
    fontFamily: 'JoseFin Sans, sans-serif',
    fontWeight: 600,
    fontSize: {
        mobile: 20,
        tablet: 20,
        laptop: 30
    }
}

const jobLocation = {
    fontFamily: 'Chathura, sans-serif',
    fontSize: '1.6rem',
    fontWeight: 900,

}

const jobDesc = {

    fontWeight: 500
}
const requirementsLink = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'soave-even',
    fontFamily: 'JoseFin Sans, sans-serif',
    fontWeight: 400,
    fontSize: '0.9rem',
    color: '#636365',
    '&:hover' : {
        color: '#FD510C'
    }
}
const requirementsText = {
    fontFamily: 'Josefin Sans, sans-serif',
    marginLeft: 1,
    opacity: 1,
    fontWeight: 600,
    fontSize: {
        mobile: '0.78rem',
        tablet: '1.2rem',
        laptop: '1.2rem'
    }

}

const lineBreak = {
    width: {
        mobile: 70,
        tablet: 80,
        laptop: 100
    },
    height: 2,
    backgroundColor: '#FD510C'
}
const requirementBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf : 'flex-start',
    marginY: 1,
    paddingX: 1

}

export {
    lineBreak,
    jobDesc,
    jobLocation,
    requirementsLink,
    requirementsText, 
    paperStyles, 
    buttonBox, 
    applyButton, 
    backDrop, 
    flexBox, 
    jobTitle, 
    requirementBox
};