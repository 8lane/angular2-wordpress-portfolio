<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'angular2-wordpress-portfolio');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8rZ-ay:g0dHHS4@T.-OCHTYBn+1L`RO]TvYk-BD|b@o+)7boMC5JK>fXzdXo(?q+');
define('SECURE_AUTH_KEY',  'BFI;<m~S[3RSFrZ96n`4C$9UM8IgO NK><6oCRO100N3b2R;h4V< hn<M QRi97@');
define('LOGGED_IN_KEY',    'R:ReN|&Y2#d/_!8Y@W+~_c*db7$OZcLm.LC$$wj<G@^?3C~`)%RXyQB]|8!UcMov');
define('NONCE_KEY',        'cQ-7RS.RgqX ,%NmM&l<,|fV9OZ):m~7d|6@.:-+yk!rsFBC>XIYI&Zm?||oZ{W7');
define('AUTH_SALT',        'ABUV@Y272QQbP($.ddfFnewKj;Y:bNuzB*`3%Pu+QZ1RQO2^mI.~+wARd[>BbY`x');
define('SECURE_AUTH_SALT', '|Pls>kp*B+@HqIQw)kN8,)?0!L2 0x$u_{mQ|a/p02B5129U;gsusEi}7r y,xeM');
define('LOGGED_IN_SALT',   'aE&K6.XH3If|Cr1Hbab-ZYg;AiHV3dL}|D! Oq|,liC+u575di@|792g>+$j9ZJ.');
define('NONCE_SALT',       '$.6-8[me_p|eqz!EcPwZD5!IB}58iSp:U)-xt$Ml8F57*C?/?N0Q]$FR^08?M.)r');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
