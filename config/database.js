module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cda6qdg2i3mnn0s5hpc0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_x1dy'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'tejFeRi7wHbXt53FzYWsazTDA9QWUfDb'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
