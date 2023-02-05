const flexBox = {
    display:'flex', 
    alignItems: 'center', 
    justifyContent:'space-even'
}

const titleWrap = {
    marginTop: 10,
    alignSelf: {
        mobile: 'center',
        tablet: 'center',
        laptop: 'flex-start'
    },
    width: {
        mobile: '80%',
        tablet: '80%',
        laptop: '50%'
    }
}

const title={
    fontFamily: 'Josefin Sans, sans-serif',
    fontWeight: 700,
    fontSize: {
        mobile: '2rem',
        tablet: '2.5rem',
        laptop: '3rem'
    },
    marginRight: {
        mobile: 0,
        tablet: 0,
        laptop: 3
    },
    marginTop : {
        mobile: 2,
        tablet: 10,
        laptop: 10
    }

}

const text = {

}
export {
    titleWrap,
    title,
    text,
    flexBox
}