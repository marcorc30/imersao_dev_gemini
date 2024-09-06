function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toUpperCase();

    


    

    let resultados = "";
    
    let titulo = "";
    let descricao = "";
    let tags = "";
    let existe = false;

        for (let dado of dados){
            titulo = dado.titulo.toUpperCase();
            descricao = dado.descricao.toUpperCase();
            tags = dado.tags.toUpperCase();
        
            existe = 
                (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)); 

            if (campoPesquisa == ""){
                section.innerHTML = "Nada foi encontrado";
                return;
            } 

            if (existe)
                resultados += `
                    <div class="item-resultado">
                        <h2><a href="" target="_blank">${dado.titulo}</a></h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                `
    }

    if (!existe){
        section.innerHTML = "Nada foi encontrado";
        return;
    }
    
    section.innerHTML = resultados;
}





