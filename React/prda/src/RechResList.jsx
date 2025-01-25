export default function RechResList({ Lis }) {
  return (
    <div className="container mt-4">
      <h1>Liste des articles</h1>
      <table className="table table-striped">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Libellé</th>
            <th>Prix</th>
            <th>En Promotion</th>
            <th>Panier</th>
          </tr>
        </thead>
        <tbody>
          {Lis.length > 0 ? (
            Lis.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.libelle}</td>
                <td>{product.prix}</td>
                <td>
                  <input type="checkbox" checked={product.Promotion} readOnly />
                </td>
                <td>
                  <button className="btn btn-success">Ajouter au panier</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">Aucun produit trouvé</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
