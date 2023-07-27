// declarando as rotas para o ts reconhece- las 

export declare global{
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            new: undefined
            habit: {
                date: string; // passa a idade para outra tela
            }
        }
    }
}