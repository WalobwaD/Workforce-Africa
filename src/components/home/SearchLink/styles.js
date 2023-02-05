const linkBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',

}

const iconBox ={
    zIndex: 1,

}

const icon = {
    fontSize: 60
}

const textBox = {
    backgroundColor: '#636365',
    marginLeft: -2.5,
    padding: 1,
    borderRadius: '0 21px 21px 0',
    transition: '0.3s',
    '&:hover': {
        backgroundColor: '#FD510C',
        opacity: 0.7,
        color: '#636365'

    }
}

const searchText = {
    marginLeft: 3,
    marginRight: 2,

}
export {
    linkBox,
    textBox,
    iconBox,
    icon,
    searchText
}