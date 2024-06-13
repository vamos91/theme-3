
# Exercices SQL

> Accès phpmyadmin (jeu de données)
> url: https://pma-sandbox.alt-tools.tech/
> user: theme3
> password:


1. Sélectionnez tous les noms des différentes catégories :

```sql
SELECT name FROM category;
```

2. Sélectionnez tous les articles n'ayant pas d'image :

```sql
SELECT * FROM article WHERE image IS NOT NULL;
```

3. Sélectionnez tous les articles publiés ainsi que leur catégorie respective :

```sql
SELECT a.*, c.name AS category
FROM article AS a
JOIN category AS c ON a.category_id = c.id
WHERE a.published = 1;
```

4. Sélectionnez tous les articles non publiés d'une catégorie spécifique 'Bases de données SQL' :

```sql
SELECT a.*
FROM article AS a
JOIN category AS c ON a.category_id = c.id
WHERE a.published = 0 AND c.name = 'Bases de données SQL';
```

5. Sélectionnez tous les articles de l'auteur 'Eve Moreau' créé et publié avant le 10 Janvier 2024 Minuit :

```sql
SELECT ar.*
FROM article AS ar
JOIN author AS au ON ar.author_id = au.id
WHERE au.name = 'Eve Moreau'
AND ar.published = 1
AND ar.created_at < '2024-01-10 00:00:00';
```

6. Sélectionnez tous les articles publiés avec une image avant le 10 Janvier 2024 Minuit ainsi que leur catégorie et leur auteur :

```sql
SELECT ar.*, c.name AS categoy, au.name AS author
FROM article AS ar
JOIN category AS c ON ar.category_id = c.id
JOIN author AS au ON ar.author_id = au.id
WHERE ar.published = 1 
AND ar.created_at < '2024-01-10 00:00:00'
AND ar.image IS NOT NULL;
```
