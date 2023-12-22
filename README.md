
# BifröstBench: Streamlined MicroTesting Library

BifröstBench is a streamlined MicroTesting library inspired by the mythological Bifröst bridge, symbolizing the connection between simplicity in testing and comprehensive code validation. This library empowers developers to write a single, template-based unit test for each function, promoting clarity and precision in the testing process.


Pour mettre à jour le README de votre projet avec la description de l'utilisation de `BifrostBench`, voici une suggestion de contenu qui explique son fonctionnement et ses fonctionnalités clés :

---

# BifrostBench : Outil de Test pour TypeScript

## Introduction

BifrostBench est une bibliothèque de test conçue pour simplifier et rationaliser le processus de test en TypeScript. Elle offre des fonctionnalités pour gérer les variances de test, exécuter des suites de tests avec différentes entrées, et vérifier les résultats attendus.

## Fonctionnalités

- **Gestion des Variances de Test** : Permet de tester une fonction avec différentes variations d'entrée et de sortie attendue.
- **Suites de Tests** : Exécute une série de tests basés sur une liste prédéfinie de cas de test.
- **Vérification des Résultats** : Fournit des méthodes pour vérifier si le résultat du test correspond aux attentes.

## Utilisation

### Variances de Test

Pour tester une fonction avec différentes variations d'entrée et de sortie, utilisez `BifrostBench.variances`.

```typescript
BifrostBench.variances<Input, Output>(
    description: string,
    template: FixtureObject<Input, Output>,
    variances: Array<FixtureVariances<Input, Output>>,
    callback: BifrostBenchCallback<Input, Output>
);
```

### Suites de Tests

Pour exécuter une série de tests basée sur une liste prédéfinie de cas de test, utilisez `BifrostBench.listSuite`.

```typescript
BifrostBench.listSuite<Input, Output>(
    description: string,
    list: Array<FixtureObject<Input, Output>>,
    callback: BifrostSimpleBenchCallback<Input, Output>
);
```

### Exemple d'Utilisation

```typescript
// Exemple d'utilisation de BifrostBench.variances
BifrostBench.variances(
    "Description du Test",
    new FixtureObject<InputType, OutputType>(/* paramètres */),
    [/* variances */],
    async (objTest) => {
        // Logique de test
    }
);

// Exemple d'utilisation de BifrostBench.listSuite
BifrostBench.listSuite(
    "Description de la Suite de Test",
    [/* Liste de FixtureObject */],
    async (objTest) => {
        // Logique de test
    }
);
```

### Récupération d'une Liste de Cas de Test

Utilisez `BifrostBench.getList` pour récupérer une liste de cas de test basée sur un tableau de configurations.

```typescript
BifrostBench.getList<Input, Output>(obj: Array<any>): Array<FixtureObject<Input, Output>>;
```

## Contribution

N'hésitez pas à contribuer à ce projet en proposant des améliorations, en signalant des bugs ou en soumettant des pull requests.

---
