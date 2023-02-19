<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        $this->call(RankSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(StanceSeeder::class);
        $this->call(TimeSeeder::class);
        $this->call(UserSeeder::class);

    }
}
