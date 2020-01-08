import React from "react";
import Loading from "../Loading";

export default ({ pagination, setPagination, recipes, loading }) => {
  const prevClick = () => {
    if (pagination === 0) {
      return;
    }
    setPagination(pagination - 10);
  };

  const nextClick = () => {
    setPagination(pagination + 10);
  };
  return (
    <div>
      <div className="container">
        <div
          style={{
            justifyContent: "center",
            display: recipes.length > 0 && !loading ? "block" : "none"
          }}
        >
          <ul class="pagination">
            <li class="waves-effect" onClick={prevClick}>
              <a href="#!">
                <div style={{ display: "flex" }}>
                  <i className="material-icons">chevron_left</i>
                  <span style={{ fontSize: 18 }}>Prev</span>
                </div>
              </a>
            </li>

            <li class="waves-effect" onClick={nextClick}>
              <a href="#!">
                <div style={{ display: "flex" }}>
                  <span style={{ fontSize: 18 }}>Next</span>
                  <i class="material-icons">chevron_right</i>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {loading && <Loading />}

        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <div className="col s12 m6" key={index}>
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={recipe.image} alt="img" />
                  </div>
                  <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                      {recipe.label}
                      <i className="material-icons right">more_vert</i>
                    </span>
                    <a href={recipe.url}>Click here</a>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                      Ingredients<i className="material-icons right">close</i>
                    </span>
                    <ul>
                      {recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: recipes.length > 0 && !loading ? "flex" : "none"
        }}
      >
        <ul class="pagination">
          <li class="waves-effect" onClick={prevClick}>
            <a href="#!">
              <div style={{ display: "flex" }}>
                <i class="material-icons">chevron_left</i>
                <span style={{ fontSize: 18 }}>Prev</span>
              </div>
            </a>
          </li>

          <li class="waves-effect" onClick={nextClick}>
            <a href="#!">
              <div style={{ display: "flex" }}>
                <span style={{ fontSize: 18 }}>Next</span>
                <i class="material-icons">chevron_right</i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
