const boxWrap = {
    display:'flex', 
    alignItems: 'center', 
    justifyContent:'space-even',
    marginTop: 10,
    marginRight: {
        mobile: 0,
        tablet: 0,
        laptop: 10
    },


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

const paperStyles = {
    height: '100%',
    padding: 2
}

const textBox = {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    '> *' : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3,
        fontWeight: 550,
        
        

    }

}

const googleButton = {
    border: '1px solid #FD510C',
    marginTop: 2
}

export {
    boxWrap,
    paperStyles,
    textBox,
    googleButton
}