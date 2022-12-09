@extends('layouts.app')

@section('title')
    Support Portal
@endsection

@section('header')
    Contact Support
@endsection

@section('content')
    <script>
        window.name = `{{ Session::get('userInfo')->NAME }}`;
        window.nid = `{{ Session::get('userInfo')->NID }}`;

        console.log(window.name, window.nid);
    </script>

    <div id="support__react"></div>
@endsection
