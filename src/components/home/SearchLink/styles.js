const linkBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',

}

const linkWrap = {
    textDecoration: 'none',
}
const iconBox ={
    zIndex: 1,

}

const icon = {
    fontSize: {
        mobile: 46,
        tablet: 70,
        laptop: 60
    }
}

const textBox = {
    backgroundColor: '#636365',
    marginLeft: {
        mobile: -2,
        tablet: -2.2,
        laptop: -2.5
    },
    padding: {
        mobile: 0.7,
        tablet: 0.9,
        laptop: 1
    },
    borderRadius: '0 21px 21px 0',
    transition: '0.3s',
    '&:hover': {
        backgroundColor: '#FD510C',
        opacity: 0.7,

    }
}

const searchText = {
    fontFamily: 'Josefin Sans, sans-serif',
    marginLeft: 3,
    marginRight: 2,
    fontSize: {
        mobile: '0.7rem',
        tablet: '0.8rem',
        laptop: '1rem'
    },

}
export {
    linkBox,
    textBox,
    iconBox,
    icon,
    searchText,
    linkWrap
}