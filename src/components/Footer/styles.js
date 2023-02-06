const email = {
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: {
        mobile: '0.8rem',
        tablet: '0.9rem',
        laptop: '1rem',
    },
    marginLeft: {
        mobile: 0,
        tablet: 0,
        laptop: 5
    },
    fontWeight: 500,
    marginTop: {
        mobile: 3,
        tablet: 0,
        laptop: 0
    }
}
const iconWrap = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '>*' : {
        color: '#FF590E',
        cursor: 'pointer',
        marginX: 1
    },
    marginBottom: 3,
    marginRight: {
        mobile: 0,
        tablet: 0,
        laptop: 10
    },
    marginTop: {
        mobile: 0,
        tablet: 0,
        laptop: 3
    }
}
const boxWrap ={
    flexGrow:1,
    position: {
        mobile: 'relative',
        tablet: 'relative',
        laptop: 'inherit'
    },
    
    bottom: 0,
    width: '100%',
    height: '100%'


}

const image = {
    width: {
        mobile: 150,
        tablet: 160,
        laptop: 150
    },

    marginLeft: {
        mobile: 0,
        tablet: 0,
        laptop: 20,
    },
    marginBottom: 3,
    marginTop: {
        mobile: 3,
        tablet: 3,
        laptop: 3
    }



}

const paperStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: {
        mobile: 'column',
        tablet: 'column',
        laptop: 'row'
    },
    height: '100%',
    borderTop: '1px solid #636365',
    marginTop: {
        mobile: 0,
        tablet: 37,
        laptop: 20
    }
}
export {
    iconWrap, 
    boxWrap,
    image,
    paperStyles,
    email
}