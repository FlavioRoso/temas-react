
export const  ThemeLoader = name =>{
    return require('./themes/'+name)[name] ;
}

export const ListThemes = [

    'Dark',
    'Light'

]