
export const  ThemeLoader = name =>{
    return require('./themes/'+name.toLowerCase())[name] ;
}

export const ListThemes = [

    'Dark',
    'Light',
    'Coffee'

]