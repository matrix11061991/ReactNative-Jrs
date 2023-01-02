# Les "states" (ou états) 
En React ou React Native, les "states" (ou états) sont des variables qui déterminent comment un composant doit s'afficher et se comporter. Ils sont généralement utilisés pour stocker des données qui changent au fil du temps et qui influencent l'apparence ou le comportement du composant.

Par exemple, un composant de formulaire qui affiche un message d'erreur lorsqu'un utilisateur entre une adresse email invalide pourrait utiliser un state pour stocker la valeur de l'adresse email entrée par l'utilisateur et un autre state pour stocker le message d'erreur à afficher. Lorsque l'adresse email est mise à jour, le state est mis à jour et le composant est réaffiché avec le message d'erreur approprié.

Il est important de noter que les states ne doivent être modifiés que par des fonctions spéciales appelées "setters" (ou définisseurs). En modifiant directement un state, vous risquez de ne pas déclencher le rechargement du composant et de ne pas afficher les mises à jour attendues.
L'exemple de code suivant illustre l'utilisation des states :
```javascript
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMessage: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.email.includes('@')) {
      this.setState({ errorMessage: 'Adresse email non valide' });
    } else {
      this.setState({ errorMessage: '' });
      // Envoyer le formulaire...
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        {this.state.errorMessage && (
          <p>{this.state.errorMessage}</p>
        )}
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}
```
