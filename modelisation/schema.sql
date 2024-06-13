SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `theme_3` DEFAULT CHARACTER SET utf8 ;

-- -----------------------------------------------------
-- Table `theme_3`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `theme_3`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `theme_3`.`author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `theme_3`.`author` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `theme_3`.`article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `theme_3`.`article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `content` TEXT NOT NULL,
  `image` VARCHAR(45) NULL,
  `published` TINYINT(1) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL,
  `category_id` INT NOT NULL,
  `author_id` INT NOT NULL,
  PRIMARY KEY (`id`, `category_id`, `author_id`),
  UNIQUE INDEX `title_UNIQUE` (`title` ASC) VISIBLE,
  UNIQUE INDEX `image_UNIQUE` (`image` ASC) VISIBLE,
  INDEX `fk_article_category_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_article_author1_idx` (`author_id` ASC) VISIBLE,
  CONSTRAINT `fk_article_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `theme_3`.`category` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_article_author1`
    FOREIGN KEY (`author_id`)
    REFERENCES `theme_3`.`author` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
